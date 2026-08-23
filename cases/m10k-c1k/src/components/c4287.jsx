import React from 'react';
const LABEL_4287 = 'component_4287';
export function Component4287({ value = 4287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4287, 'data-value': derived.doubled }, children);
}
export default Component4287;
