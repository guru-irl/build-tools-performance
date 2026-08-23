import React from 'react';
const LABEL_28586 = 'component_28586';
export function Component28586({ value = 28586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28586, 'data-value': derived.doubled }, children);
}
export default Component28586;
