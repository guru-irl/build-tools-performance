import React from 'react';
const LABEL_14683 = 'component_14683';
export function Component14683({ value = 14683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14683, 'data-value': derived.doubled }, children);
}
export default Component14683;
