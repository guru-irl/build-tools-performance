import React from 'react';
const LABEL_11944 = 'component_11944';
export function Component11944({ value = 11944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11944, 'data-value': derived.doubled }, children);
}
export default Component11944;
