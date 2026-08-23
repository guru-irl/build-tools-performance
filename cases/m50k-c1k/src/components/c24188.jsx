import React from 'react';
const LABEL_24188 = 'component_24188';
export function Component24188({ value = 24188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24188, 'data-value': derived.doubled }, children);
}
export default Component24188;
