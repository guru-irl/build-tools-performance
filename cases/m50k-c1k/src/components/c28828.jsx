import React from 'react';
const LABEL_28828 = 'component_28828';
export function Component28828({ value = 28828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28828, 'data-value': derived.doubled }, children);
}
export default Component28828;
