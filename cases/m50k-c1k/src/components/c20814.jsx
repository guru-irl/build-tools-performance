import React from 'react';
const LABEL_20814 = 'component_20814';
export function Component20814({ value = 20814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20814, 'data-value': derived.doubled }, children);
}
export default Component20814;
