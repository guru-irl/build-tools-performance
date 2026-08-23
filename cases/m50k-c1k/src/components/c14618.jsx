import React from 'react';
const LABEL_14618 = 'component_14618';
export function Component14618({ value = 14618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14618, 'data-value': derived.doubled }, children);
}
export default Component14618;
