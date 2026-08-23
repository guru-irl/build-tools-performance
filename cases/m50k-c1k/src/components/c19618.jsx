import React from 'react';
const LABEL_19618 = 'component_19618';
export function Component19618({ value = 19618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19618, 'data-value': derived.doubled }, children);
}
export default Component19618;
