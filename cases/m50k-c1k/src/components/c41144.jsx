import React from 'react';
const LABEL_41144 = 'component_41144';
export function Component41144({ value = 41144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41144, 'data-value': derived.doubled }, children);
}
export default Component41144;
