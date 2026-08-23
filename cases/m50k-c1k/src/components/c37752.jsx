import React from 'react';
const LABEL_37752 = 'component_37752';
export function Component37752({ value = 37752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37752, 'data-value': derived.doubled }, children);
}
export default Component37752;
