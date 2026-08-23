import React from 'react';
const LABEL_17618 = 'component_17618';
export function Component17618({ value = 17618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17618, 'data-value': derived.doubled }, children);
}
export default Component17618;
