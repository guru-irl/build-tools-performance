import React from 'react';
const LABEL_14388 = 'component_14388';
export function Component14388({ value = 14388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14388, 'data-value': derived.doubled }, children);
}
export default Component14388;
