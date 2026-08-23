import React from 'react';
const LABEL_42479 = 'component_42479';
export function Component42479({ value = 42479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42479, 'data-value': derived.doubled }, children);
}
export default Component42479;
