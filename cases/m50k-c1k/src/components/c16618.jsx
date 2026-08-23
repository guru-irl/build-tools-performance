import React from 'react';
const LABEL_16618 = 'component_16618';
export function Component16618({ value = 16618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16618, 'data-value': derived.doubled }, children);
}
export default Component16618;
