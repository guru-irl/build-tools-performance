import React from 'react';
const LABEL_37888 = 'component_37888';
export function Component37888({ value = 37888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37888, 'data-value': derived.doubled }, children);
}
export default Component37888;
