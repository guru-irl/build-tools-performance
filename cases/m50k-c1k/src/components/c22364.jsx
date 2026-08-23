import React from 'react';
const LABEL_22364 = 'component_22364';
export function Component22364({ value = 22364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22364, 'data-value': derived.doubled }, children);
}
export default Component22364;
