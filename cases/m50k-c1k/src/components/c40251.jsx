import React from 'react';
const LABEL_40251 = 'component_40251';
export function Component40251({ value = 40251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40251, 'data-value': derived.doubled }, children);
}
export default Component40251;
