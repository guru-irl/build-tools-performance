import React from 'react';
const LABEL_40828 = 'component_40828';
export function Component40828({ value = 40828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40828, 'data-value': derived.doubled }, children);
}
export default Component40828;
