import React from 'react';
const LABEL_22748 = 'component_22748';
export function Component22748({ value = 22748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22748, 'data-value': derived.doubled }, children);
}
export default Component22748;
