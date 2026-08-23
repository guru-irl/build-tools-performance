import React from 'react';
const LABEL_41107 = 'component_41107';
export function Component41107({ value = 41107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41107, 'data-value': derived.doubled }, children);
}
export default Component41107;
