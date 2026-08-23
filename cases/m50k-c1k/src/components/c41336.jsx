import React from 'react';
const LABEL_41336 = 'component_41336';
export function Component41336({ value = 41336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41336, 'data-value': derived.doubled }, children);
}
export default Component41336;
