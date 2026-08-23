import React from 'react';
const LABEL_15721 = 'component_15721';
export function Component15721({ value = 15721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15721, 'data-value': derived.doubled }, children);
}
export default Component15721;
