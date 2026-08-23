import React from 'react';
const LABEL_31618 = 'component_31618';
export function Component31618({ value = 31618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31618, 'data-value': derived.doubled }, children);
}
export default Component31618;
