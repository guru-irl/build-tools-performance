import React from 'react';
const LABEL_8839 = 'component_8839';
export function Component8839({ value = 8839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8839, 'data-value': derived.doubled }, children);
}
export default Component8839;
