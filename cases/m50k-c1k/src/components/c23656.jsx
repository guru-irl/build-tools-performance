import React from 'react';
const LABEL_23656 = 'component_23656';
export function Component23656({ value = 23656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23656, 'data-value': derived.doubled }, children);
}
export default Component23656;
