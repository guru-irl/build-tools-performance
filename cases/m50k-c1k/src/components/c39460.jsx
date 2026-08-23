import React from 'react';
const LABEL_39460 = 'component_39460';
export function Component39460({ value = 39460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39460, 'data-value': derived.doubled }, children);
}
export default Component39460;
