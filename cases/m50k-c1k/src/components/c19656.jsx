import React from 'react';
const LABEL_19656 = 'component_19656';
export function Component19656({ value = 19656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19656, 'data-value': derived.doubled }, children);
}
export default Component19656;
