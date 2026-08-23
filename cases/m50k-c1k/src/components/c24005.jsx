import React from 'react';
const LABEL_24005 = 'component_24005';
export function Component24005({ value = 24005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24005, 'data-value': derived.doubled }, children);
}
export default Component24005;
