import React from 'react';
const LABEL_45988 = 'component_45988';
export function Component45988({ value = 45988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45988, 'data-value': derived.doubled }, children);
}
export default Component45988;
