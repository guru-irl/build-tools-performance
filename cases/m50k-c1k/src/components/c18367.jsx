import React from 'react';
const LABEL_18367 = 'component_18367';
export function Component18367({ value = 18367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18367, 'data-value': derived.doubled }, children);
}
export default Component18367;
