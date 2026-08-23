import React from 'react';
const LABEL_40618 = 'component_40618';
export function Component40618({ value = 40618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40618, 'data-value': derived.doubled }, children);
}
export default Component40618;
