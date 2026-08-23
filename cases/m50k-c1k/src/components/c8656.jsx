import React from 'react';
const LABEL_8656 = 'component_8656';
export function Component8656({ value = 8656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8656, 'data-value': derived.doubled }, children);
}
export default Component8656;
