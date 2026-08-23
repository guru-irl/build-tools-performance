import React from 'react';
const LABEL_22022 = 'component_22022';
export function Component22022({ value = 22022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22022, 'data-value': derived.doubled }, children);
}
export default Component22022;
