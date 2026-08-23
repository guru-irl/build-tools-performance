import React from 'react';
const LABEL_19888 = 'component_19888';
export function Component19888({ value = 19888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19888, 'data-value': derived.doubled }, children);
}
export default Component19888;
