import React from 'react';
const LABEL_26828 = 'component_26828';
export function Component26828({ value = 26828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26828, 'data-value': derived.doubled }, children);
}
export default Component26828;
