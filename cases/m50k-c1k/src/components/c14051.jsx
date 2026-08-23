import React from 'react';
const LABEL_14051 = 'component_14051';
export function Component14051({ value = 14051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14051, 'data-value': derived.doubled }, children);
}
export default Component14051;
