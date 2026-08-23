import React from 'react';
const LABEL_24744 = 'component_24744';
export function Component24744({ value = 24744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24744, 'data-value': derived.doubled }, children);
}
export default Component24744;
