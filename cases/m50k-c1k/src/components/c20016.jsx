import React from 'react';
const LABEL_20016 = 'component_20016';
export function Component20016({ value = 20016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20016, 'data-value': derived.doubled }, children);
}
export default Component20016;
