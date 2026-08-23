import React from 'react';
const LABEL_41936 = 'component_41936';
export function Component41936({ value = 41936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41936, 'data-value': derived.doubled }, children);
}
export default Component41936;
