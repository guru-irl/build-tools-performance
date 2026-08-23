import React from 'react';
const LABEL_41618 = 'component_41618';
export function Component41618({ value = 41618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41618, 'data-value': derived.doubled }, children);
}
export default Component41618;
