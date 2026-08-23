import React from 'react';
const LABEL_4316 = 'component_4316';
export function Component4316({ value = 4316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4316, 'data-value': derived.doubled }, children);
}
export default Component4316;
