import React from 'react';
const LABEL_4717 = 'component_4717';
export function Component4717({ value = 4717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4717, 'data-value': derived.doubled }, children);
}
export default Component4717;
