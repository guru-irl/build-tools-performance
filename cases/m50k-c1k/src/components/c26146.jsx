import React from 'react';
const LABEL_26146 = 'component_26146';
export function Component26146({ value = 26146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26146, 'data-value': derived.doubled }, children);
}
export default Component26146;
