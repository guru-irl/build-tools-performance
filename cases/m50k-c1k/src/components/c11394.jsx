import React from 'react';
const LABEL_11394 = 'component_11394';
export function Component11394({ value = 11394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11394, 'data-value': derived.doubled }, children);
}
export default Component11394;
