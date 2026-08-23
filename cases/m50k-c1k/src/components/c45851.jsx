import React from 'react';
const LABEL_45851 = 'component_45851';
export function Component45851({ value = 45851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45851, 'data-value': derived.doubled }, children);
}
export default Component45851;
