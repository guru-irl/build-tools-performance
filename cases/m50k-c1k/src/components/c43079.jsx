import React from 'react';
const LABEL_43079 = 'component_43079';
export function Component43079({ value = 43079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43079, 'data-value': derived.doubled }, children);
}
export default Component43079;
