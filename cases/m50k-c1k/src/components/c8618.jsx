import React from 'react';
const LABEL_8618 = 'component_8618';
export function Component8618({ value = 8618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8618, 'data-value': derived.doubled }, children);
}
export default Component8618;
