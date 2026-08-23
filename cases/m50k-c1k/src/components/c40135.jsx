import React from 'react';
const LABEL_40135 = 'component_40135';
export function Component40135({ value = 40135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40135, 'data-value': derived.doubled }, children);
}
export default Component40135;
