import React from 'react';
const LABEL_4476 = 'component_4476';
export function Component4476({ value = 4476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4476, 'data-value': derived.doubled }, children);
}
export default Component4476;
