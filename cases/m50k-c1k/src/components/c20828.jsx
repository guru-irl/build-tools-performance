import React from 'react';
const LABEL_20828 = 'component_20828';
export function Component20828({ value = 20828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20828, 'data-value': derived.doubled }, children);
}
export default Component20828;
