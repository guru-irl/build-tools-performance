import React from 'react';
const LABEL_41090 = 'component_41090';
export function Component41090({ value = 41090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41090, 'data-value': derived.doubled }, children);
}
export default Component41090;
