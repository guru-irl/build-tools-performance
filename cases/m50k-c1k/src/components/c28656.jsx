import React from 'react';
const LABEL_28656 = 'component_28656';
export function Component28656({ value = 28656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28656, 'data-value': derived.doubled }, children);
}
export default Component28656;
