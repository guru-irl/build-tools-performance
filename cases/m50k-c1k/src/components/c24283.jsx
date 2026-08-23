import React from 'react';
const LABEL_24283 = 'component_24283';
export function Component24283({ value = 24283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24283, 'data-value': derived.doubled }, children);
}
export default Component24283;
