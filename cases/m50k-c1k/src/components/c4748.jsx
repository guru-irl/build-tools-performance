import React from 'react';
const LABEL_4748 = 'component_4748';
export function Component4748({ value = 4748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4748, 'data-value': derived.doubled }, children);
}
export default Component4748;
