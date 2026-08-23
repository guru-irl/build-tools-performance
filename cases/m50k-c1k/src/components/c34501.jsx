import React from 'react';
const LABEL_34501 = 'component_34501';
export function Component34501({ value = 34501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34501, 'data-value': derived.doubled }, children);
}
export default Component34501;
